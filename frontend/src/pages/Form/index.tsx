import FormCard from 'components/FormCard';
import {useParams } from 'react-router-dom';

function Form() {

    const paramens = useParams()

    return (
       <FormCard movieId={`${paramens.movieId}`}/>
    );

} 

export default Form;