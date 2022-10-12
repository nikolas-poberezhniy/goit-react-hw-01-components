import { Description, Wrapper, Avatar, Username, UserInformation, StatsItem, StatsList, StatsText} from "./Profile.styled";
import PropTypes from 'prop-types'

export const Profile = ({username,tag ,location,avatar, stats:{followers,views,likes}}) => {
    
    return (
        <Wrapper>
            <Description >
                <Avatar src={avatar} alt="User avatar"/>
                <Username >{username}</Username>
                <UserInformation >@{tag}</UserInformation>
                <UserInformation >{location}</UserInformation>
            </Description>

            <StatsList >
                <StatsItem>
                    <StatsText >Followers</StatsText>
                    <StatsText bold >{followers}</StatsText>
                </StatsItem>
                <StatsItem>
                    <StatsText >Views</StatsText>
                    <StatsText bold >{views}</StatsText>
                </StatsItem>
                <StatsItem>
                    <StatsText >Likes</StatsText>
                    <StatsText bold>{likes}</StatsText>   
                </StatsItem>
            </StatsList>
        </Wrapper>
    );
}

Profile.propTypes = {
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
}