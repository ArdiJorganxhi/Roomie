
import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = () => {



    const [values, setValues] = useState({
      username: '',
      name: '',
      surname: '',
      gender: '',
      email: '',
      password: ''
    
    });
  

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
      
    };

    const handleGender = e => {
      values.gender = e.target.value
    }

    const handleErrors = e => {
      setErrors(validateInfo(values));
      
    }
  

     function validateInfo(values) {
        let errors = {};
      
        if (!values.username.trim()) {
          errors.username = 'Username required';
        }
        // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        //   errors.name = 'Enter a valid name';
        // }
        if(!values.name.trim()){
            errors.name = 'Name required!';
        }
        if(!values.surname.trim()){
            errors.surname = 'Surname required!';
        }
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password needs to be 6 characters or more';
        }
      
    
    
       
        return errors;
      }
    const handleSubmit = e => {
      e.preventDefault();
      setIsSubmitting(true);
  
      


      axios.post('https://490b-94-121-173-56.eu.ngrok.io/api/Account/register', values).then(

        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )

      
      
    };



    const handleLoginSubmit = e => {
      e.preventDefault();
      setIsSubmitting(true);

      axios.post('https://490b-94-121-173-56.eu.ngrok.io/api/Account/login', values).then(
        res => {
          console.log(res)
          const users = res.data
          localStorage.setItem('user', JSON.stringify(values));

        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }
  
    useEffect(
      () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          console.log(values);
        }
      },
      [errors]
    );
  
    return { handleChange, handleSubmit, handleGender, handleLoginSubmit, handleErrors, values, errors, isSubmitting };
  };
  
  export default useForm;