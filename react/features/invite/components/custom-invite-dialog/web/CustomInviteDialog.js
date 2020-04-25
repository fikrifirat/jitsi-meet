import React, { PureComponent } from 'react';

import { Dialog } from '../../../../base/dialog';

/**
 * React {@code CustomInviteDialog} responsible for inviting new people dialog.
 *
 * @extends Component
 */
export default class CustomInviteDialog extends PureComponent {
    /**
     * Initializes a new {@code CustomInviteDialog} instance.
     *
     * @param {Object} props - The read - only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);

        this.state = {
            phone: ''
        };

        this._isAddDisabled = this._isAddDisabled.bind(this);
        this._onPhoneChange = this._onPhoneChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    /**
     * Update disable status of invite button.
     *
     * @private
     * @returns {boolean}
     */
    _isAddDisabled() {
        return this.state.phone.length === 0;
    }

    /**
     * Handle phone number change.
     *
     * @param {Object} e - JS Event object.
     * @private
     * @returns {void}
     */
    _onPhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    /**
     * Send invitation to entered phone number.
     *
     * @private
     * @returns {void}
     */
    _onSubmit() {
        console.log(`phone:${this.state.phone}`);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                okDisabled = { this._isAddDisabled() }
                okKey = 'addPeople.add'
                onSubmit = { this._onSubmit }
                titleKey = 'addPeople.title'
                width = 'medium'>
                <input
                    className = 'input-control'
                    onChange = { this._onPhoneChange }
                    type = 'tel'
                    value = { this.state.phone } />
            </Dialog>
        );
    }
}
