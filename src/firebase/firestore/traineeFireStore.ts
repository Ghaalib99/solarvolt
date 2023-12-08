import { db } from '../firebase';
import { collection, doc, addDoc, updateDoc, serverTimestamp, getDocs, query } from 'firebase/firestore';

interface TraineeData {
    traineeID: string,
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    city: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    occupation: string;
    income: string;
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

export const createTrainee = async (traineeData: TraineeData) => {
    try {
        const traineeRef = await addDoc(collection(db, 'trainees'), {
            ...traineeData,
            createdAt: serverTimestamp(),
        });

        return traineeRef.id;
    } catch (error) {
        console.error('Error adding trainee document: ', error);
        throw error;
    }
};

export const updateTrainee = async (traineeId: string, traineeData: TraineeData) => {
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
