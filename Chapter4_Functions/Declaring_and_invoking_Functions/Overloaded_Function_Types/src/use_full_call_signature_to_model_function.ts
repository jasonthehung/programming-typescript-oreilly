type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

let warnUser: WarnUser = ((warning: string) => {
  if (warnUser.wasCalled) {
    console.log('A')
  }
  warnUser.wasCalled = true
  alert(warning)

  warnUser.wasCalled = false
}) as WarnUser
