// https://www.terraform.io/docs/providers/oci/r/integration_integration_instance.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idcs_at": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "instance_url": {
        "type": "string",
        "computed": true
      },
      "integration_instance_type": {
        "type": "string",
        "required": true
      },
      "is_byol": {
        "type": "bool",
        "required": true
      },
      "is_file_server_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "message_packs": {
        "type": "number",
        "required": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state_message": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
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

export interface IntegrationIntegrationInstanceConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly idcsAt?: string;
  readonly integrationInstanceType: string;
  readonly isByol: boolean;
  readonly isFileServerEnabled?: boolean;
  readonly messagePacks: number;
  readonly state?: string;
  /** timeouts block */
  readonly timeouts?: IntegrationIntegrationInstanceTimeouts;
}
export interface IntegrationIntegrationInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IntegrationIntegrationInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IntegrationIntegrationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_integration_integration_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._idcsAt = config.idcsAt;
    this._integrationInstanceType = config.integrationInstanceType;
    this._isByol = config.isByol;
    this._isFileServerEnabled = config.isFileServerEnabled;
    this._messagePacks = config.messagePacks;
    this._state = config.state;
    this._timeouts = config.timeouts;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idcs_at - computed: false, optional: true, required: false
  private _idcsAt?: string;
  public get idcsAt() {
    return this._idcsAt;
  }
  public set idcsAt(value: string | undefined) {
    this._idcsAt = value;
  }

  // instance_url - computed: true, optional: false, required: true
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // integration_instance_type - computed: false, optional: false, required: true
  private _integrationInstanceType: string;
  public get integrationInstanceType() {
    return this._integrationInstanceType;
  }
  public set integrationInstanceType(value: string) {
    this._integrationInstanceType = value;
  }

  // is_byol - computed: false, optional: false, required: true
  private _isByol: boolean;
  public get isByol() {
    return this._isByol;
  }
  public set isByol(value: boolean) {
    this._isByol = value;
  }

  // is_file_server_enabled - computed: true, optional: true, required: false
  private _isFileServerEnabled?: boolean;
  public get isFileServerEnabled() {
    return this._isFileServerEnabled ?? this.getBooleanAttribute('is_file_server_enabled');
  }
  public set isFileServerEnabled(value: boolean | undefined) {
    this._isFileServerEnabled = value;
  }

  // message_packs - computed: false, optional: false, required: true
  private _messagePacks: number;
  public get messagePacks() {
    return this._messagePacks;
  }
  public set messagePacks(value: number) {
    this._messagePacks = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IntegrationIntegrationInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IntegrationIntegrationInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      idcs_at: this._idcsAt,
      integration_instance_type: this._integrationInstanceType,
      is_byol: this._isByol,
      is_file_server_enabled: this._isFileServerEnabled,
      message_packs: this._messagePacks,
      state: this._state,
      timeouts: this._timeouts,
    };
  }
}
