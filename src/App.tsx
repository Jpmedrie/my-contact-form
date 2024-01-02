import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor={'name'}>
                    {''}
                </Label>Name
                <Input id={'name'} name={'name'} />
                <Label />Email<Input />
                <Label />Message<Input id={'message'} name={'message'} />
                <SubmitButton />
            </form>
        </div>
    );
}

export default App;
