import React, {Component, Fragment} from 'react';
import {Transition, animated} from 'react-spring'
import './MailList.css'
import Drawer from "../LetterDrawer/LetterDrawer";
import {connect} from 'react-redux'
import { deleteLetterGroup, groupCheck, setMail, setWidth } from '../../actions/mailCreators'
import SingleLetter from "./SingleLetter/SingleLetter";
import Spinner from "../Spinner/Spinner";
import Backdrop from '../Backdrop/Backdrop'


class MailList extends Component {

    resizeHandler = () => {
        this.props.setWidth(window.innerWidth)
    }
    componentDidMount() {
        this.props.setMail(this.props.emails.mailList)
        window.addEventListener('resize', this.resizeHandler)
    }
    componentWillUnmount() {
       window.removeEventListener('resize', this.resizeHandler)
    }

    render(){

        const { mailList, active, drawerIsOpen, checkboxesArray, search, groupCheck, isFetching, width } = this.props.emails
        let currentMailList= null
        const desktop = width > 710
        if (isFetching) {currentMailList = (
            <li>
                <Spinner/>
            </li>
        )}
        else {
        if (mailList[active].length > 0){
            const set = new Set(mailList[active].filter(element => element.from.includes(search)))
            mailList[active].filter(element => element.subject.includes(search)).forEach(element => set.add(element))
            mailList[active].filter(element => element.to.includes(search)).forEach(element => set.add(element))
            currentMailList = Array.from(set).map((item) => {
                let letter = item.from || item.to
                letter = letter + ' - ' + item.subject

                const index = letter.indexOf(search)
                return (<li key={item.id}>
                            <SingleLetter letter={letter} index={index} item={item}/>
                        </li>)
            })}
        else {
            currentMailList = (
                <li>
                    <div className="no-letters">No letters in this folder so far</div>
                </li>
            )}
        }
        const drawerOffset = desktop ? 50 : 0

        return (
            <Fragment>
                {this.props.emails.topMenuOpen && <Backdrop/>}
                <div className="mail-list">
                    {desktop && mailList[active].length > 0 && <button onClick={() => this.props.deleteLetterGroup(this.props.emails, checkboxesArray)}
                                                                                       className={checkboxesArray[active].length > 0 ? "delete-chosen chosen-active" : "delete-chosen"}>Delete</button>}
                    {desktop && mailList[active].length > 0 && <input onChange={() => this.props.groupCheck(mailList, active, checkboxesArray, groupCheck)} checked={groupCheck}
                                                                                      className="letter-checkbox group-checkbox" type="checkbox"/>}

                    <ul>
                        {currentMailList}
                    </ul>

                </div>

                <Transition
                    native
                    items = {drawerIsOpen}
                    from = {{position: 'absolute', left: '100vw', top: '0vh'}}
                    enter = {{position: 'absolute', left: drawerOffset + 'vw', top: '0vh'}}
                    leave = {{position: 'absolute', left: '100vw', top: '0vh'}}
                    config = {{duration: 500, delay: this.props.emails.delay}}
                >
                    {show => show && (props =>(
                        <animated.div style ={props}>
                            <Drawer />
                        </animated.div>
                    ))}
                </Transition>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        emails: state.mails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLetterGroup: (emails, itemList) => dispatch(deleteLetterGroup(emails, itemList)),
        groupCheck: (mailList, active, checkboxesArray, check) => dispatch(groupCheck(mailList, active, checkboxesArray, check)),
        setMail: (mailList) => dispatch(setMail(mailList)),
        setWidth: (width) => dispatch(setWidth(width)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailList)