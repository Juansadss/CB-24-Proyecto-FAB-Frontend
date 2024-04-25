
import './WindowTitle.css';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className='title-container'>
            <h1>{title}</h1>
            <hr />
            <span>Registro</span>
        </div>
    );
}

export default Title;
