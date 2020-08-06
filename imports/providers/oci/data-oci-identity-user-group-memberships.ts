// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_user_group_memberships.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "group_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "memberships": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "group_id": "string",
              "id": "string",
              "inactive_state": "string",
              "state": "string",
              "time_created": "string",
              "user_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "user_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciIdentityUserGroupMembershipsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly groupId?: string;
  readonly userId?: string;
  /** filter block */
  readonly filter?: DataOciIdentityUserGroupMembershipsFilter[];
}
export class DataOciIdentityUserGroupMembershipsMemberships extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // group_id - computed: true, optional: false, required: true
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // user_id - computed: true, optional: false, required: true
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataOciIdentityUserGroupMembershipsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityUserGroupMemberships extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityUserGroupMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_user_group_memberships',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._groupId = config.groupId;
    this._userId = config.userId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string;
  public get groupId() {
    return this._groupId;
  }
  public set groupId(value: string | undefined) {
    this._groupId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // memberships - computed: true, optional: false, required: true
  public memberships(index: string) {
    return new DataOciIdentityUserGroupMembershipsMemberships(this, 'memberships', index);
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string;
  public get userId() {
    return this._userId;
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityUserGroupMembershipsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityUserGroupMembershipsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      group_id: this._groupId,
      user_id: this._userId,
      filter: this._filter,
    };
  }
}
