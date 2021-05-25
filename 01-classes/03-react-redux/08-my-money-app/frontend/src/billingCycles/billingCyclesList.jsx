import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getList, showUpdate, showDelete } from "./billingCycleAction"

class List extends Component {
    componentDidMount() {
        this.props.getList()
    }

    renderRows() {
        const bcList = this.props.list || []

        return bcList.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <div className="btn-group">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.showUpdate(bc)}>
                            <i className="fa fa-pencil" />
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.showDelete(bc)}>
                            <i className="fa fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    list: state.billingCycle.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getList, showUpdate, showDelete
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)