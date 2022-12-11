import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import ButtonWithIcon from '../button/ButtonWithIcon';
import Button from '../button/Button';
import style from './AuthForm.module.scss';
import InputField from '../inputField/inputField';
import CheckboxInputField from '../inputField/checkBoxInputField';
import { useTranslation } from 'next-i18next';
import TextTranslate from '../typography/TextTranslate';

export const LoginForm = () => {
    // const router = useRouter();
    // const [login, { loading, error }] = useMutation<any, LoginValuesTypes>(
    //   LOGIN_USER,
    //   {
    //     onCompleted: ({ login }) => {
    //       if (login) {
    //         setCookie(null, 'access_token', login.access_token, {
    //           maxAge: 7 * 24 * 60 * 60,
    //         });
    //         setCookie(
    //           null,
    //           'user_access',
    //           JSON.stringify({
    //             isAdmin: login.isAdmin,
    //             isStuff: login.isStuff,
    //             isManager: login.isManager,
    //           }),
    //           {
    //             maxAge: 7 * 24 * 60 * 60,
    //           },
    //         );
    //         setCookie(
    //           null,
    //           'user_name',
    //           JSON.stringify({
    //             firstName: login.firstName,
    //             lastName: login.lastName,
    //           }),
    //           {
    //             maxAge: 7 * 24 * 60 * 60,
    //           },
    //         );
    //         router.push('/');
    //         //localStorage.setItem('token', register.token as string);
    //         //localStorage.setItem('userId', register.id as string);
    //       }
    //     },
    //   },
    // );

    const { t } = useTranslation();
    const loading = false;
    const error = false;
    const login = Promise.resolve;
    const isLoading = loading;
    const isError = !!error;
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(t('errors.forms.errors')),
          password: Yup.string().required(t('errors.forms.errors')),
        })}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);

          await login({ variables: { ...values } });

          if (isError)
            actions.setErrors({
              username: JSON.stringify(error),
              password: '',
            });

          actions.setSubmitting(false);
        }}
      >
        <Form
        className={style['authenticate-form-section']}
        >
          
            <div className={style['authenticate-form-section']}>
                <Field label={t('forms.usernameLabel')} name="username" component={InputField} />
                <Field label={t('forms.passwordLabel')} name="password" type="password" component={InputField} />

                <Button btnText={t('forms.forgotPassword')} onClick={() => {}} type="ghost"/>
            </div>
            <div className={`${style['m-0']} ${style['authenticate-form-section']}`}>
                <Button 
                    customClass={style['authenticate-form-submit']} 
                    btnText={t('signIn')}
                    isSubmit
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    type="primary" 
                  />
            </div>
        </Form>
      </Formik>
    );
  }

  export const RegisterForm = () => {
    const {t} = useTranslation();
    // const router = useRouter();
    // const [login, { loading, error }] = useMutation<any, LoginValuesTypes>(
    //   LOGIN_USER,
    //   {
    //     onCompleted: ({ login }) => {
    //       if (login) {
    //         setCookie(null, 'access_token', login.access_token, {
    //           maxAge: 7 * 24 * 60 * 60,
    //         });
    //         setCookie(
    //           null,
    //           'user_access',
    //           JSON.stringify({
    //             isAdmin: login.isAdmin,
    //             isStuff: login.isStuff,
    //             isManager: login.isManager,
    //           }),
    //           {
    //             maxAge: 7 * 24 * 60 * 60,
    //           },
    //         );
    //         setCookie(
    //           null,
    //           'user_name',
    //           JSON.stringify({
    //             firstName: login.firstName,
    //             lastName: login.lastName,
    //           }),
    //           {
    //             maxAge: 7 * 24 * 60 * 60,
    //           },
    //         );
    //         router.push('/');
    //         //localStorage.setItem('token', register.token as string);
    //         //localStorage.setItem('userId', register.id as string);
    //       }
    //     },
    //   },
    // );
    const loading = false;
    const error = false;
    const login = Promise.resolve;
    const isLoading = loading;
    const isError = !!error;
    return (
      <Formik
      validateOnChange
      initialValues={{
        username: '',
        email: '',
        password: '',
        password2: '',
        agreeWithTerms: false,
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
        password2: Yup.string()
          .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
          .required('You must confirm your password'),
        agreeWithTerms: Yup.bool().oneOf([true],'Must agree with terms and conditions'),
      })}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);

          await login({ variables: { ...values } });

          if (isError)
            actions.setErrors({
              username: JSON.stringify(error),
              password: '',
            });

          actions.setSubmitting(false);
        }}
      >
        <Form
        className={style['authenticate-form-section']}
        >
          
            <div className={style['authenticate-form-section']}>
                <Field name="username" label={t('forms.username')} component={InputField} />
                <Field name="email" label={t('forms.email')} type="email" component={InputField} />
                <Field name="password" label={t('forms.password')} type="password" component={InputField} />
                <Field
                    name="password2"
                    label={t('forms.confirmPassword')}
                    type="password"
                    component={InputField}
                />

                <Field name="agreeWithTerms" label={t('forms.agreeTermsConditions')} component={CheckboxInputField} />
            </div>
            <div className={`${style['m-0']} ${style['authenticate-form-section']}`}>
                <Button 
                    customClass={style['authenticate-form-submit']} 
                    btnText={t('signUp')}
                    isSubmit
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    type="primary" />
            </div>
        </Form>
      </Formik>
    );
  }

  const AuthForm = () => {
  const { t } = useTranslation(); 
  const router = useRouter();

  const login = (router.query.login as string) === 'true';
  const [loginPage, setLoginPage] = useState(login);

  const changeToLoginPage = () => {
    setLoginPage(true)
  }
  const changeToRegisterPage = () => {
    setLoginPage(false)
  }

  useEffect(() => {
    setLoginPage(login);
  }, [login]);

    return (
       <section className={style['main-container']}>
           <section className={style['authenticate-form-container']}>
               <div  className={style['authenticate-form-section']}>
               <div  className={style['authenticate-form-title']}>{loginPage ? t('forms.loginLabel') : t('forms.registerLabel')}</div>
                   <div className={style['authenticate-form-section']}>
                       <ButtonWithIcon customClass={style['authenticate-form-login-google']} src='view-number.svg' btnText={`${t('forms.loginWith')} Google`} onClick={() => {}} type="primary" />
                       <ButtonWithIcon customClass={style['authenticate-form-login-facebook']} src='view-number.svg' btnText={`${t('forms.loginWith')} Facebook`} onClick={() => {}} type="primary" />
                   </div>
               </div>
               <div className={style['authenticate-form-textLine']}><h3><span>Or</span></h3></div>
               {loginPage ? <>
                <LoginForm /> 
                <div className={`${style['m-0']} ${style['authenticate-form-section']}`}>
                    <div className={style['suggestion-text-container']}>
                        <TextTranslate tag='span' className={style['suggestion-text']} value='forms.registerSuggestionText' />
                        <Button  btnText={t('forms.registerSuggestionButton')} onClick={changeToRegisterPage} type="ghost"/>
                    </div>
                </div>
               </>: <>
                    <RegisterForm />
                    <div className={`${style['m-0']} ${style['authenticate-form-section']}`}>
                        <div className={style['suggestion-text-container']} >
                            <TextTranslate tag='span' className={style['suggestion-text']} value='forms.loginSuggestionText' />
                            <Button  btnText={t('forms.loginSuggestionButton')} onClick={changeToLoginPage} type="ghost"/>
                        </div>
                    </div>
               </>}
           </section>
       </section>
       )
   };
   
   export default AuthForm;