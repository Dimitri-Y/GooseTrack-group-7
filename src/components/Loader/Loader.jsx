import { RotatingLines} from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled.jsx';

const Loader = () => {
    return (
        <LoaderStyled>
            <RotatingLines
                strokeColor="#4fa94d"
                strokeWidth="4"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </LoaderStyled>
    )
};

export default Loader;