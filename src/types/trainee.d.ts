export interface TraineeProps {
    traineeID?: string,
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
    file: file | null;
    filePreview?: string
}

interface FileDetails {
    name: string;
    size: number;
}