import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileMenuComponents = memo(({model, PbodyStyle, PopcionsStyle, PiconStyle, PulStyle, PliStyle,
     PbackgroundColorHover = 'rgb(233, 236, 239)', render}) =>
{
    
    const fontFamily ='Arial';

    const bodyStyle = {
        backgroundColor: !PbodyStyle?.backgroundColor && 'white',
        boxSizing: !PbodyStyle?.boxSizing && 'border-box',
        border: !PbodyStyle?.border && '1px solid rgb(224, 224, 224)',
        borderRadius: !PbodyStyle?.borderRadius && '5px 5px',
        padding: !PbodyStyle?.padding && '10px 0px 10px 0px',
        boxShadow: !PbodyStyle?.boxShadow && '0px 0px 10px rgba(63, 63, 63, 0.2',
        fontFamily: !PbodyStyle?.fontFamily && fontFamily,
        position: !PbodyStyle?.position && 'absolute',  
        top: !PbodyStyle?.top && '50px',  
        zIndex: !PbodyStyle?.zIndex && '9',  
        ...PbodyStyle
    }

    const opcionsStyle={
        textDecoration: !PopcionsStyle?.textDecoration && 'none',
        color: !PopcionsStyle?.color && 'black',
        fontFamily: !PopcionsStyle?.fontFamily && fontFamily,
        ...PopcionsStyle
    }

    const iconStyle={
        boxSizing: !PiconStyle?.boxSizing && 'border-box',
        color: !PiconStyle?.color && 'black',
        backgroundColor: !PiconStyle?.backgroundColor && 'white',
        margin: !PiconStyle?.margin && '0px 10px 0px 0px',
        padding: !PiconStyle?.padding && '0px 0px 0px 0px',
        ...PiconStyle
    }

    const ulStyle={
        boxSizing: !PulStyle?.boxSizing && 'border-box',
        margin: !PulStyle?.margin && '0px',
        padding: !PulStyle?.padding && '0px',
        listStyleType: !PulStyle?.listStyleType && 'none',
        ...PulStyle
    }

    const liStyle={
        boxSizing: !PliStyle?.boxSizing && 'border-box',
        margin: !PliStyle?.margin && '0px 0px 0px 0px',
        padding: !PliStyle?.padding && '15px 15px 15px 15px',
        cursor: !PliStyle?.cursor && 'pointer',
        backgroundColor: !PliStyle?.backgroundColor && 'white',
        ...PliStyle
    }

    const colorChange = (id, icon, change) =>
    {
        var x = document.getElementById(id);
        var y = document.getElementById(icon);

        if(x !== null)
            if(change === 'enter')
            {
                x.style.backgroundColor = PbackgroundColorHover;
                y.style.backgroundColor = PbackgroundColorHover;
            }
            else
            {
                x.style.backgroundColor = !PliStyle?.backgroundColor && 'white';
                y.style.backgroundColor = !PliStyle?.backgroundColor && 'white';
            }
    }

    if(render)
    {
        return ( 
            <div style={bodyStyle}>
                <ul style={ulStyle}>
                        {   
                            model.map((m,index) => 
                                <Link  key={index} style={opcionsStyle} to={m.url} onClick={ () => m.command }> 
                                    
                                    <li style={liStyle} id={`li${index}`} 
                                    onMouseEnter={ () => colorChange(`li${index}`, `icon${index}`, 'enter')} 
                                    onMouseLeave={ () => colorChange(`li${index}`, `icon${index}`, 'leave')}> 

                                        <i className={m.icon} id={`icon${index}`} style={iconStyle}></i> 
                                            
                                        {m.label} 
                                        
                                    </li>

                                </Link> 
                            )
                        }
                </ul>
            </div> 
        )
    }
    else
    {
        return(<></>)
    }
})

ProfileMenuComponents.propTypes = {
    model: PropTypes.array.isRequired,
    render: PropTypes.bool.isRequired,
    PbackgroundColorHover: PropTypes.string,
    PbodyStyle: PropTypes.object,
    PopcionsStyle: PropTypes.object,
    PiconStyle: PropTypes.object,
    PulStyle: PropTypes.object,
    PliStyle: PropTypes.object
}

export default ProfileMenuComponents;