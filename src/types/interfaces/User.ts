interface IGeo {
  lat: string,
  lng: string
}

interface IAddres {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo
}

interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddres,
  phone: string,
  website: string,
  company: ICompany,
}