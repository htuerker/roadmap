export class ClientUser {
  constructor(
    readonly displayName: string,
    readonly photoURL: string,
    readonly date?: Date
  ) { }
}

export class User {
  constructor(
    readonly displayName: string,
    readonly email: string,
    readonly emailVerified: boolean,
    readonly photoURL: string,
    readonly roles: String[],
    readonly uid: string,
    // required for audit fields
    readonly date?: Date
  ) { }

  static toClient(user: User): ClientUser {
    return {
      displayName: user.displayName,
      photoURL: user.photoURL,
      date: user.date,
    };
  }
}