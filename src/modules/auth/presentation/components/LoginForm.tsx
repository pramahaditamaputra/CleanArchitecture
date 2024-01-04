/**
 * A component that renders a login form.
 * This component is responsible for handling user input, validation, and submission.
 */
import React from 'react';
import {useLogin} from '../../application/hooks/useLogin';
import {ILoginParams} from '../../domain/params/auth.params';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Text} from 'react-native-elements';

// Define the validation schema for the form fields
const validationSchema = yup.object().shape({
  username: yup.string().required('Username field is required'),
  password: yup.string().required('Password field is required'),
});

const LoginForm = () => {
  const {mutate, isLoading} = useLogin();

  /**
   * Handles the login action.
   * @param data - The login parameters containing the username and password.
   */
  const onLogin = (data: ILoginParams) => mutate(data);

  return (
    <Formik
      initialValues={{username: 'kminchelle', password: '0lelplR'}}
      validationSchema={validationSchema}
      onSubmit={values => onLogin(values)}>
      {({handleChange, handleSubmit, errors, values}) => (
        <View style={styles.wrapperForm}>
          <View style={styles.wrapperFormContent}>
            <Input
              placeholder="Username"
              onChangeText={handleChange('username')}
              value={values.username}
              errorMessage={errors.username}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values.password}
              errorMessage={errors.password}
            />
            <Button
              onPress={() => handleSubmit()}
              title="Login"
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
  );
};

const styles = StyleSheet.create({
  wrapperForm: {
    height: Dimensions.get('window').height / 3,
    justifyContent: 'space-between',
  },
  wrapperFormContent: {
    alignItems: 'stretch',
  },
  wrapperFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionFooterText: {
    color: '#b7d282',
  },
});

export default LoginForm;
