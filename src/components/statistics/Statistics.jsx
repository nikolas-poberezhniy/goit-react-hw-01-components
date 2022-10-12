import { Wrapper,StatisticsTitle,StatisticsList,StatisticsItem,ItemLabel,ItemPercentage} from "./Statistics.slyled"
import PropTypes from 'prop-types'

export const Statistics = ({ stats, title }) => { 
    
    return (
        <Wrapper>
            {title && <StatisticsTitle>{ title}</StatisticsTitle>}
            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                    return(
                        <StatisticsItem key = {id}>
                            <ItemLabel>
                                {label}
                            </ItemLabel>
                            <ItemPercentage>
                                {percentage}%
                            </ItemPercentage>
                        </StatisticsItem>
                    )
                })}
            </StatisticsList>
        </Wrapper>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
       PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired
        })
    ),
}