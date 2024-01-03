import classNames from 'classnames';
import styles from './siguayork.module.scss';
import { AddUp } from '../add-up/add-up';
import App from '../../App';

export interface SiguayorkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Siguayork = ({ className }: SiguayorkProps) => {
    return <div>
        <AddUp />
        <App />
    </div>;
};
