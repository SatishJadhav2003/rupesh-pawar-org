export class member {
  public name: string;
  public address: string;
  public mobile: string;
  public gender: string;
  public aadhar:string;
  public occupation:string;
  public pan:string

  constructor(name: string, address: string, mobile: string, gender: string,occupation:string,aadhar:string,pan:string) {

    this.name = name;
    this.address = address;
    this.mobile = mobile;
    this.gender = gender;
    this.occupation=occupation;
    this.aadhar=aadhar;
    this.pan=pan;
  }
}
