import classNames from 'classnames';
import styles from './add-up.module.scss';

export interface AddUpProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddUp = ({ className }: AddUpProps) => {
    return <div className={styles['heeading-style']}>
        <h2>Contact Us</h2>
        <p>Have a question? Fill out the form and we'll get back to you as soon as we can
            <div className={styles['shadow-text']}>All fields are required</div>
        </p></div>;
};
