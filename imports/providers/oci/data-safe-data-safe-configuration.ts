// https://www.terraform.io/docs/providers/oci/r/data_safe_data_safe_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_enabled": {
        "type": "string",
        "computed": true
      },
      "url": {
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

export interface DataSafeDataSafeConfigurationConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly isEnabled?: boolean;
  /** timeouts block */
  readonly timeouts?: DataSafeDataSafeConfigurationTimeouts;
}
export interface DataSafeDataSafeConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataSafeDataSafeConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSafeDataSafeConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_data_safe_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._isEnabled = config.isEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this._isEnabled ?? this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | undefined) {
    this._isEnabled = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_enabled - computed: true, optional: false, required: true
  public get timeEnabled() {
    return this.getStringAttribute('time_enabled');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataSafeDataSafeConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataSafeDataSafeConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      is_enabled: this._isEnabled,
      timeouts: this._timeouts,
    };
  }
}
