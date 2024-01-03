import { createBoard } from '@wixc3/react-board';
import { Siguayork } from '../../../components/siguayork/siguayork';

export default createBoard({
    name: 'Siguayork',
    Board: () => <Siguayork />,
    isSnippet: true,
});
