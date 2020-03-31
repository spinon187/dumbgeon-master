import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


class CharSheet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.char.name,
      level: this.props.char.level,
      class: this.props.char.class,
      hp: this.props.char.hp,
      hpMax: this.props.char.hpMax,
      ac: this.props.char.ac,
      str: this.props.char.str,
      con: this.props.char.con,
      dex: this.props.char.dex,
      wis: this.props.char.wis,
      int: this.props.char.int,
      cha: this.props.char.cha,
      inventory: this.props.char.inventory,
      notes: this.props.char.notes
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

  displayInventory = () => {
    this.state.inventory.map(item => <div className='invItem'>{item}</div>)
  }

  render(){
    return (
      <CharSheetBox>
        <div className='charName'><p>{this.state.name}</p></div>
        <div className='charClassLvl'>{this.formatClass()}</div>
        <div className='prof'><p><span>Proficiency Bonus:</span> {this.getProficiency()}</p></div>
        <div className='charHP'><p>{this.state.hp} / {this.state.maxHp}</p></div>
        <div className='charStat'>
          <p><span>AC:</span>{this.state.ac}</p>
        </div>
        <div className='charStat'>
          <p><span>STR:</span>{this.state.str} ({this.getStatBonus(this.state.str)}</p>
        </div>
        <div className='charStat'>
          <p><span>DEX:</span>{this.state.dex} ({this.getStatBonus(this.state.dex)}</p>
        </div>
        <div className='charStat'>
          <p><span>CON:</span>{this.state.con} ({this.getStatBonus(this.state.con)}</p>
        </div>
        <div className='charStat'>
          <p><span>INT:</span>{this.state.int} ({this.getStatBonus(this.state.int)}</p>
        </div>
        <div className='charStat'>
          <p><span>WIS:</span>{this.state.wis} ({this.getStatBonus(this.state.wis)}</p>
        </div>
        <div className='charStat'>
          <p><span>CHA:</span>{this.state.cha} ({this.getStatBonus(this.state.cha)})</p>
        </div>
        <div className='charInv'>Inventory:<br />{this.displayInventory()}</div>
        <div className='charNotes'>Notes:<br /><p>{this.state.notes}</p></div>

      </CharSheetBox>
    )
  }
}

const CharSheetBox = styled.div`

`

