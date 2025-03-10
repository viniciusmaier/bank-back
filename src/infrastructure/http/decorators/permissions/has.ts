

export function HasPermission () {
  return (target: string, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.value = function () {}

    return descriptor
  }
}
