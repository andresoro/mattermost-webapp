// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGroupsNotAssociatedToTeam, linkGroupSyncable, getAllGroupsAssociatedToTeam} from 'mattermost-redux/actions/groups';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import {setModalSearchTerm} from 'actions/views/search';

import {ModalIdentifiers} from 'utils/constants';
import {isModalOpen} from 'selectors/views/modals';

import AddGroupsToTeamModal from './add_groups_to_team_modal';

function mapStateToProps(state) {
    const searchTerm = state.views.search.modalSearch;

    const team = getCurrentTeam(state) || {};

    let groups = [];
    if (searchTerm) {
        // selector
    } else {
        // selector
    }

    const modalId = ModalIdentifiers.ADD_USER_TO_TEAM;

    return {
        currentTeamName: team.display_name,
        currentTeamId: team.id,
        searchTerm,
        groups,
        show: isModalOpen(state, modalId),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getGroupsNotAssociatedToTeam,
            setModalSearchTerm,
            linkGroupSyncable,
            getAllGroupsAssociatedToTeam,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupsToTeamModal);
