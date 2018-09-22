import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import mongoose from 'mongoose';
import User from '../models/user';
import bcrypt from 'bcrypt'; //加密密码
let router = express.Router();

const validtorInput = (data) => {
    const errors = {};
    // 四个为空的判断
    if (validator.isEmpty(data.username)) {
        errors.username = 'The field is required';
    }
    if (validator.isEmpty(data.email)) {
        errors.email = 'The field is required';
    }
    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'The field is required';
    }
    if (validator.isEmpty(data.conPassword)) {
        errors.conPassword = 'The field is required';
    }
    if (!validator.equals(data.password, data.conPassword)) {
        errors.conPassword = 'Password must match'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/signup', (req, res, next) => {
    const { errors, isValid } = validtorInput(req.body);
    const { username, password, email } = req.body;
    if (isValid) {
        User.find({ $or: [{ username }, { email }] }, (err, docs) => {
            // 有同名
            if (docs.length) {
                if (docs[0]) {
                    errors.username = '用户已存在'
                }
                if (docs[1]) {
                    errors.email = '邮箱已存在'
                }
                res.status(400).json(errors)
            } else {
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({ error: '加密失败' })
                    } else {
                        const user = {
                            username,
                            email,
                            password: hash,
                            created: new Date().toLocaleString()
                        }
                        User(user).save(() => {
                            res.status(200).json({ success: true });
                        })
                    }
                })
            }
        })
    } else {
        res.status(400).json(errors);
    }
})

router.post('/login', (req, res, next) => {
    const { users, password } = req.body;
    const errors = {};
    User.find({ $or: [{ username: users }, { email: users }] }, (err_docs, docs) => {
        if (docs.length === 1) {
            bcrypt.compare(password, docs[0].password, (err_b, res_b) => {
                if (res_b) {
                    res.status(200).json({ success: '登录成功' })
                } else {
                    errors.password = '密码不正确'
                    res.status(400).json(errors)
                }
            })
        }
    })
})

export default router;