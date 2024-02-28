export class ClientVote {
  constructor(
    readonly vote: string,
    readonly comment: string,
  ) { }
}

export class Vote {
  constructor(
    readonly vote: string,
    readonly comment: string,
    readonly email: string,
  ) { }


  static toClient(object: Vote): ClientVote {
    const { email, ...clientVote } = object;
    return {
      ...clientVote,
    };
  }
}