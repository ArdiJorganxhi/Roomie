
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../API/baseUrl';





const useForm = () => {

  

 

    const [values, setValues] = useState({
      username: '',
      name: '',
      surname: '',
      gender: '',
      email: '',
      password: ''
    
    });


    const [advertValues, setAdvertValues] = useState({
      id: -1,
      title: '',
      city: '',
      district: '',
      neighbourhood: '',
      rooms: '',
      price: 0,
      floorArea: '',
      content: ''
    });


    const [advertValuesExample, setAdvertValuesExample] = useState({
      title: '',
      city: '',
      district: '',
      neighbourhood: '',
      rooms: '',
      price: 0,
      floorArea: '',
      content: ''

    })


    

    const [advertValuesArray, setAdvertValuesArray] = useState([])
  

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const  handleAdvertValuesChange = e => {
    
      
        setAdvertValuesExample({
          ...advertValuesExample,
          [e.target.name]: e.target.value
        })
     }


    const confirmChanges = e => {
      
     e.preventDefault();
     setAdvertValuesExample(advertValuesExample)

        
    }
 
  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
      
    };


    const handleAdvertChange = e => {
   
      setAdvertValues({
        ...advertValues,
        [e.target.name]: e.target.value
       
      })
      console.log(e.target.value)
    }

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
  
      


      axios.post(baseUrl + '/api/Account/register', values).then(

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

      axios.post(baseUrl + '/api/Account/login', values).then(
        res => {
          console.log(res)

         localStorage.setItem("token", res.data.token);
         localStorage.setItem("name", res.data.username)
         localStorage.setItem("email", res.data.email);
         localStorage.setItem("gender", res.data.gender);

        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }

    const handleAdvertSubmit = e => {
      e.preventDefault();

      let token = localStorage.getItem("token")
      console.log(token)
     

      

      axios.post(baseUrl + '/api/Advert',advertValues, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        },      
    })      
    .then((response) => {
      console.log('response',response.data)

    })
    .catch((error) => {
      console.log(error)

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
  
    return { handleChange, handleSubmit, handleGender, handleLoginSubmit, handleErrors, values, errors, isSubmitting, handleAdvertChange, handleAdvertSubmit, advertValues, advertValuesExample, handleAdvertValuesChange, confirmChanges };
  };
  
  export default useForm;