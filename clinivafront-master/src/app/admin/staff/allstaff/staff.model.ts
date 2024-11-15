export class Staff {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  address: string;
  mobile: string;
  designation: string;

  constructor(staff: Staff) {
    this.id = staff.id;
    this.img = staff.img;
    this.name = staff.name;
    this.email = staff.email;
    this.date = staff.date;
    this.address = staff.address;
    this.mobile = staff.mobile;
    this.designation = staff.designation;
  }
}
