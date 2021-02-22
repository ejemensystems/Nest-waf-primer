
export class CreateCitizenDto {
  person(person: any) {
    throw new Error("Method not implemented.");
  }
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly nationality?: string;
    readonly countryofbirth: string;
    readonly stateofbirth: string;
    readonly townofbirth: string;
    readonly adress: boolean;
    readonly profession: boolean;
    readonly isActive?: boolean;
    readonly citizen: CreateCitizenDto; 
    //In case you want to create a user along with student
    

}
