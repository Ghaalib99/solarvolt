import { TraineeProps } from '@/types/trainee';
import { db } from '../firebase';
import { storage } from '../firebase'
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from 'firebase/storage';
import { collection, doc, addDoc, updateDoc, serverTimestamp, getDocs, query } from 'firebase/firestore';

interface CreateTraineeParams {
    traineeData: TraineeProps;
    file: File | null;
}

export const traineeDocRef = (traineeId: string) => {
    return doc(db, 'trainees', traineeId);
};

export const getTrainees = async () => {
    const traineesCollection = collection(db, 'trainees');
    const traineesQuery = query(traineesCollection); // You can add ordering or filtering here if needed.

    try {
        const traineesSnapshot = await getDocs(traineesQuery);
        const traineesData = traineesSnapshot.docs.map((doc) => ({
            traineeId: doc.id,
            ...doc.data(),
        }));

        return traineesData;
    } catch (error) {
        console.error('Error fetching trainees: ', error);
        throw error;
    }
};

// export const createTrainee = async (traineeData: TraineeProps) => {
//     try {
//         const traineeRef = await addDoc(collection(db, 'trainees'), {
//             ...traineeData,
//             createdAt: serverTimestamp(),
//         });

//         return traineeRef.id;
//     } catch (error) {
//         console.error('Error adding trainee document: ', error);
//         throw error;
//     }
// };

export const createTrainee = async ({ traineeData, file }: CreateTraineeParams) => {
    try {
        if (file) {
            // Upload the file to Firebase Storage
            const storageRef = ref(storage, `traineeFiles/${file.name}`);
            await uploadBytes(storageRef, file);

            // Get the download URL of the uploaded file
            const fileDownloadURL = await getDownloadURL(storageRef);

            // Add the trainee document with the file URL
            const traineeRef = await addDoc(collection(db, 'trainees'), {
                ...traineeData,
                file: fileDownloadURL,
                createdAt: serverTimestamp(),
            });

            return traineeRef.id;
        } else {
            // Add the trainee document without the file URL
            const traineeRef = await addDoc(collection(db, 'trainees'), {
                ...traineeData,
                file: null,
                createdAt: serverTimestamp(),
            });

            return traineeRef.id;
        }
    } catch (error) {
        console.error('Error adding trainee document: ', error);
        throw error;
    }
};

export const updateTrainee = async (traineeId: string, traineeData: TraineeProps) => {
    const traineeRef = traineeDocRef(traineeId);

    try {
        await updateDoc(traineeRef, {
            ...traineeData,
            updatedAt: serverTimestamp(),
        });

        return traineeId;
    } catch (error) {
        console.error('Error updating trainee document: ', error);
        throw error;
    }
};
