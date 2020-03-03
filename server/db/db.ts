import mongoose from 'mongoose'
import DB_URL from '../config/db'
mongoose.Promise = global.Promise;

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('MongoDB connected')
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('MongoDB connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected');
});

export default mongoose;
