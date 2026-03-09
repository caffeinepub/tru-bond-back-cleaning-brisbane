import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Submission {
    id: SubmissionId;
    serviceType: string;
    name: string;
    propertyAddress: string;
    email: Email;
    message: string;
    preferredDate: string;
    timestamp: Time;
    phone: string;
}
export type Email = string;
export type SubmissionId = string;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getSubmissionById(id: SubmissionId): Promise<Submission>;
    submitForm(name: string, email: Email, phone: string, message: string, serviceType: string, propertyAddress: string, preferredDate: string): Promise<SubmissionId>;
}
