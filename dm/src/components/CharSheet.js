import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


class CharSheet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      level: this.props.level,
      class: this.props.class,
      hp: this.props.hp,
      hpMax: this.props.hpMax,
      ac: this.props.ac,
      str: this.props.str,
      con: this.props.con,
      dex: this.props.dex,
      wis: this.props.wis,
      int: this.props.int,
      cha: this.props.cha,
    }
  }

  getProficiency = () => {
    return ~~((this.state.level+7)/4)
  }

  formatClass = () => {
    let s = '';
    for(i=0;i<this.state.level;i++){
      if(i > 0){
        s += ` / ${this.state.level[i]} ${this.state.class[i]}`
      }
    }
    return s
  }

  getStatBonus = stat => {
    let val = ~~((stat-10)/2);
    return val < 0 ? `-${val}` : `+${val}`
  }

  render(){
    return (
      <CharSheetBox>
        <div className='charName'><p>{this.state.name}</p></div>
        <div className='charClassLvl'>{this.formatClass}</div>
        <div className='prof'><p><span>Proficiency Bonus:</span> {this.getProficiency}</p></div>
        <div className='chrStat'>
          <p><span>AC:</span>{this.state.ac}</p>
        </div>
        <div className='chrStat'>
          <p><span>STR:</span>{this.state.str} ({this.getStatBonus(this.state.str)}</p>
        </div>
        <div className='chrStat'>
          <p><span>DEX:</span>{this.state.dex} ({this.getStatBonus(this.state.dex)}</p>
        </div>
        <div className='chrStat'>
          <p><span>CON:</span>{this.state.con} ({this.getStatBonus(this.state.con)}</p>
        </div>
        <div className='chrStat'>
          <p><span>INT:</span>{this.state.int} ({this.getStatBonus(this.state.int)}</p>
        </div>
        <div className='chrStat'>
          <p><span>WIS:</span>{this.state.wis} ({this.getStatBonus(this.state.wis)}</p>
        </div>
        <div className='chrStat'>
          <p><span>CHA:</span>{this.state.cha} ({this.getStatBonus(this.state.cha)})</p>
        </div>

      </CharSheetBox>
    )
  }
}

const CharSheetBox = styled.div`

`