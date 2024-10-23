export class RegisterModuleDto {
  constructor(
    public name: string,
    public typeModuleId: number
  ) {}

  static check(
    data: any
  ): [error?: string, registerModuleDto?: RegisterModuleDto] {
    const { name, typeModuleId } = data

    const errors: string[] = []

    if (!name) errors.push('Name is required')
    if (!typeModuleId) errors.push('TypeModuleId is required')

    if (errors.length > 0) return [errors.join(', ')]

    return [undefined, new RegisterModuleDto(data.name, data.typeModuleId)]
  }
}
