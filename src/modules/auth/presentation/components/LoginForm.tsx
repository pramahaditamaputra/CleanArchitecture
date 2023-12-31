import React from 'react';
import {useLogin} from '../../application/hooks/useLogin';
import {ILoginParams} from '../../domain/params/auth.params';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Text} from 'react-native-elements';

const validationSchema = yup.object().shape({
  username: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

const LoginForm = () => {
  const {mutate, isLoading} = useLogin();
  const onLogin = (data: ILoginParams) => mutate(data);

  return (
    <>
      <Formik
        initialValues={{username: 'kminchelle', password: '0lelplR'}}
        validationSchema={validationSchema}
        onSubmit={values => onLogin(values)}>
        {({
          handleChange,
          handleSubmit,
          isValid,
          errors,
          values,
          touched,
          setTouched,
        }) => (
          <View style={styles.wrapperForm}>
            <View style={styles.wrapperFormContent}>
              <Input
                placeholder="Username"
                onChangeText={handleChange('username')}
                value={values.username}
                onFocus={() => setTouched({username: true, password: false})}
                errorMessage={
                  touched.username && errors.username && errors.username
                }
              />
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                value={values.password}
                onFocus={() => setTouched({username: false, password: true})}
                errorMessage={
                  touched.password && errors.password && errors.password
                }
              />
              <Button
                onPress={() => handleSubmit()}
                title="Login"
                disabled={!isValid}
                loading={isLoading}
              />
            </View>

            <View style={styles.wrapperFooter}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.actionFooterText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperForm: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  wrapperFormContent: {
    alignItems: 'center',
  },
  wrapperFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  actionFooterText: {
    color: '#b7d282',
  },
});

export default LoginForm;
