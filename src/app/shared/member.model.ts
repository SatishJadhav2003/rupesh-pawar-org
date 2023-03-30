export class member {
  public id:string;
  public name: string;
  public address: string;
  public mobile: string;
  public email: string;
  public dob:Date;
  public occupation:string;

  constructor(id:string,name: string, address: string, mobile: string, email: string,occupation:string,dob:Date) {
    this.id=id;
    this.name = name;
    this.address = address;
    this.mobile = mobile;
    this.email = email;
    this.occupation=occupation;
    this.dob=dob;
  }
}
