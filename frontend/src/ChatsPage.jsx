import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '3c875b97-447e-4770-b94e-1ab47c4c219f', 
        props.user.username, 
        props.user.secret
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage