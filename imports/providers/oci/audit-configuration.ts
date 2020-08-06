// https://www.terraform.io/docs/providers/oci/r/audit_configuration.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "retention_period_days": {
        "type": "number",
        "required": true
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

export interface AuditConfigurationConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly retentionPeriodDays: number;
  /** timeouts block */
  readonly timeouts?: AuditConfigurationTimeouts;
}
export interface AuditConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AuditConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AuditConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_audit_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._retentionPeriodDays = config.retentionPeriodDays;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // retention_period_days - computed: false, optional: false, required: true
  private _retentionPeriodDays: number;
  public get retentionPeriodDays() {
    return this._retentionPeriodDays;
  }
  public set retentionPeriodDays(value: number) {
    this._retentionPeriodDays = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AuditConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AuditConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      retention_period_days: this._retentionPeriodDays,
      timeouts: this._timeouts,
    };
  }
}
