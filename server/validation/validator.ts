import validator from 'validator';

export class Validator {

    public static registerInput(data: any){
        data.username = !this.isEmpty(data.username) ? data.username : '';
        data.email = !this.isEmpty(data.email) ? data.email : '';
        data.password = !this.isEmpty(data.password) ? data.password : '';
        data.password2 = !this.isEmpty(data.password2) ? data.password2 : '';
        let errors = {username:"",email:"",password:"",password2:""};
        if(!validator.isLength(data.username,{min:2,max:30})) {
            errors.username =  '名字的长度不能小于2位并且不能大于30位!'
        }

        if (validator.isEmpty(data.username)) {
           errors.username = '名字不能为空!'
        }

        if (validator.isEmpty(data.email)) {
            errors.email = '邮箱不能为空!'
        }

        if (!validator.isEmail(data.email)) {
            errors.email = '邮箱不合法!'
        }

        if (validator.isEmpty(data.password)) {
            errors.password = '密码不能为空!'
        }

        if(!validator.isLength(data.password,{min:6,max:30})) {
            errors.password = '密码的长度不能小于6位并且不能大于30位!'
        }

        if (validator.isEmpty(data.password2)) {
            errors.password2 = '确认密码不能为空!'
        }

        if(!validator.equals(data.password,data.password2)) {
            errors.password2 = '两次密码输入不一致'
        }

        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };

    }

    public static loginInput(data: any) {
        data.email = !this.isEmpty(data.email) ? data.email : '';
        data.password = !this.isEmpty(data.password) ? data.password : '';
        let errors = {email:"",password:""};
        if (validator.isEmpty(data.email)) {
            errors.email = '邮箱不能为空!'
        }

        if (!validator.isEmail(data.email)) {
            errors.email = '邮箱不合法!'
        }

        if (validator.isEmpty(data.password)) {
            errors.password = '密码不能为空!'
        }

        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };
    }

    private static isEmpty (value: any) {
        if (typeof value === 'string' && value.trim().length === 0) {
            return true
        } else if (typeof value === 'object') {
            return Object.values(value).every(v => v === "")
        } else {
            return  value === undefined || value === null
        }
    }
}
