import type { RuleType } from 'async-validator'
import { FormItemRule } from 'element-plus'
import { i18n } from '../lang'

/**
 * 手机号码验证
 * 用于表单验证
 */
export function validatorMobile(rule: any, mobile: string | number, callback: Function) {
    // 允许空值，若需必填请添加多验证规则
    if (!mobile) {
        return callback()
    }
    if (!/^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(mobile.toString())) {
        return callback(new Error(i18n.global.t('validate.Please enter the correct mobile number')))
    }
    return callback()
}

/**
 * 账户名验证
 */
export function validatorAccount(rule: any, val: string, callback: Function) {
    if (!val) {
        return callback()
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(val)) {
        return callback(new Error(i18n.global.t('validate.Please enter the correct account')))
    }
    return callback()
}

// email
export function regularEmail(val: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) return true
    return false
}
export function validatorEmail(rule: any, val: string, callback: Function) {
    if (!val) {
        return callback()
    }
    if (!regularEmail(val)) {
        return callback(new Error(i18n.global.t('Please enter the correct email')))
    }
    return callback()
}

/**
 * 密码验证
 */
export function regularPassword(val: string) {
    if (/^[a-zA-Z0-9_]{6,32}$/.test(val)) return true
    return false
}
export function validatorPassword(rule: any, val: string, callback: Function) {
    if (!val) {
        return callback()
    }
    if (!regularPassword(val)) {
        return callback(new Error(i18n.global.t('validate.Please enter the correct password')))
    }
    return callback()
}

/**
 * 变量名验证
 */
export function validatorVarName(rule: any, val: string, callback: Function) {
    if (!val) {
        return callback()
    }
    if (!/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(val)) {
        return callback(new Error(i18n.global.t('validate.Please enter the correct name')))
    }
    return callback()
}

export function validatorEditorRequired(rule: any, val: string, callback: Function) {
    if (!val || val == '<p><br></p>') {
        return callback(new Error(i18n.global.t('validate.Content cannot be empty')))
    }
    return callback()
}

/**
 * 构建表单验证规则
 * @var ruleName 规则名:required=必填,mobile=手机号,account=账户,password=密码,varName=变量名,number、integer、float、date、url、email
 * @var title 验证项的标题
 * @var trigger 自定义验证触发方式
 * @var message 自定义验证错误消息
 */
export const validatorType = {
    required: i18n.global.t('validate.Required'),
    mobile: i18n.global.t('validate.mobile'),
    account: i18n.global.t('validate.Account name'),
    password: i18n.global.t('validate.password'),
    varName: i18n.global.t('validate.Variable name'),
    url: 'URL',
    email: i18n.global.t('validate.e-mail address'),
    date: i18n.global.t('validate.date'),
    number: i18n.global.t('validate.number'),
    integer: i18n.global.t('validate.integer'),
    float: i18n.global.t('validate.Floating point number'),
}
export function buildValidatorData(ruleName: string, title: string = '', trigger: string = 'blur', message: string = ''): FormItemRule {
    // 必填
    if (ruleName == 'required') {
        return {
            required: true,
            message: message ? message : i18n.global.t('Please input field', { field: title }),
            trigger: trigger,
        }
    }

    // 常见类型
    let validatorType = ['number', 'integer', 'float', 'date', 'url', 'email']
    if (validatorType.includes(ruleName)) {
        return {
            type: ruleName as RuleType,
            message: message ? message : i18n.global.t('Please enter the correct field', { field: title }),
            trigger: trigger,
        }
    }

    // 自定义验证方法
    let validatorCustomFun: anyObj = {
        email: validatorEmail,
        mobile: validatorMobile,
        account: validatorAccount,
        password: validatorPassword,
        varName: validatorVarName,
        editorRequired: validatorEditorRequired,
    }
    if (validatorCustomFun[ruleName]) {
        return {
            validator: validatorCustomFun[ruleName],
            trigger: trigger,
        }
    }
    return {}
}
