import { ExtractJwt, Strategy } from 'passport-jwt';
import SecretOrKey from '../config/secret';
import { UserModel } from '../models/Users';

/**
 * passport jwt configuration
 */
export class PassportConfig {
    public passport: any;

    constructor(passport: any) {
        this.passport = passport;
    }

    public init(){
        let opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SecretOrKey
        };

        this.passport.use(new Strategy(opts, (jwtPayload, done) => {
            console.log(jwtPayload);
            UserModel.findById({_id: jwtPayload.id})
                .then(user => {
                    if(user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err => {
                    return done(err, false);
                })
        }))
    }
}
