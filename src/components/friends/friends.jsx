import { BsCircleFill } from 'react-icons/bs';
import { ListItem, Avatar, Name,FriendsList } from './friends.styled';
import PropTypes from 'prop-types'

export const FriendList = ({ friendsArr }) => {

    return (<FriendsList>
        {friendsArr.map(({ avatar, name, isOnline, id }) => {
            return (
                <ListItem key={id}>
                    <BsCircleFill color={isOnline?"green":"red"} />
                    <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
                    <Name>{name}</Name>
                </ListItem>)
        })}
    </FriendsList>)
}

FriendList.propTypes = {
    friendsArr: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
}