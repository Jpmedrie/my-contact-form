import { createBoard } from '@wixc3/react-board';
import { AddUp } from '../../../components/add-up/add-up';

export default createBoard({
    name: 'AddUp',
    Board: () => <AddUp />,
    isSnippet: true,
});
