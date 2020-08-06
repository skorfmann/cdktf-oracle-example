// https://www.terraform.io/docs/providers/oci/r/identity_idp_group_mapping.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "group_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_provider_id": {
        "type": "string",
        "required": true
      },
      "idp_group_name": {
        "type": "string",
        "required": true
      },
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityIdpGroupMappingConfig extends TerraformMetaArguments {
  readonly groupId: string;
  readonly identityProviderId: string;
  readonly idpGroupName: string;
  /** timeouts block */
  readonly timeouts?: IdentityIdpGroupMappingTimeouts;
}
export interface IdentityIdpGroupMappingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityIdpGroupMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityIdpGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_idp_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupId = config.groupId;
    this._identityProviderId = config.identityProviderId;
    this._idpGroupName = config.idpGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId: string;
  public get groupId() {
    return this._groupId;
  }
  public set groupId(value: string) {
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

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId: string;
  public get identityProviderId() {
    return this._identityProviderId;
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }

  // idp_group_name - computed: false, optional: false, required: true
  private _idpGroupName: string;
  public get idpGroupName() {
    return this._idpGroupName;
  }
  public set idpGroupName(value: string) {
    this._idpGroupName = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityIdpGroupMappingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityIdpGroupMappingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: this._groupId,
      identity_provider_id: this._identityProviderId,
      idp_group_name: this._idpGroupName,
      timeouts: this._timeouts,
    };
  }
}
