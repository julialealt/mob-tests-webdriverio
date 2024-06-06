import { $ } from '@wdio/globals'

class LoginPage {

    //public get inputUsername () { return $('#username') }
    //public get inputPassword () { return $('#password') }
    //public get btnSubmit () { return $('button[type="submit"]') }

    public async login(username: string, password: string) {

        await driver.pause(5000)

        //await this.inputUsername.setValue(username)
        //await this.inputPassword.setValue(password)
        //await this.btnSubmit.click()
    }
}

export default new LoginPage();
