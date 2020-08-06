// https://www.terraform.io/docs/providers/oci/r/waas_protection_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "action": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key": {
        "type": "string",
        "required": true
      },
      "labels": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "mod_security_rule_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "waas_policy_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "exclusions": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "exclusions": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "target": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
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

export interface WaasProtectionRuleConfig extends TerraformMetaArguments {
  readonly action?: string;
  readonly key: string;
  readonly waasPolicyId: string;
  /** exclusions block */
  readonly exclusions?: WaasProtectionRuleExclusions[];
  /** timeouts block */
  readonly timeouts?: WaasProtectionRuleTimeouts;
}
export interface WaasProtectionRuleExclusions {
  readonly exclusions?: string[];
  readonly target?: string;
}
export interface WaasProtectionRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class WaasProtectionRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WaasProtectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_protection_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._key = config.key;
    this._waasPolicyId = config.waasPolicyId;
    this._exclusions = config.exclusions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string;
  public get action() {
    return this._action ?? this.getStringAttribute('action');
  }
  public set action(value: string | undefined) {
    this._action = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return this.getListAttribute('labels');
  }

  // mod_security_rule_ids - computed: true, optional: false, required: true
  public get modSecurityRuleIds() {
    return this.getListAttribute('mod_security_rule_ids');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // waas_policy_id - computed: false, optional: false, required: true
  private _waasPolicyId: string;
  public get waasPolicyId() {
    return this._waasPolicyId;
  }
  public set waasPolicyId(value: string) {
    this._waasPolicyId = value;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: WaasProtectionRuleExclusions[];
  public get exclusions() {
    return this._exclusions;
  }
  public set exclusions(value: WaasProtectionRuleExclusions[] | undefined) {
    this._exclusions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WaasProtectionRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WaasProtectionRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      key: this._key,
      waas_policy_id: this._waasPolicyId,
      exclusions: this._exclusions,
      timeouts: this._timeouts,
    };
  }
}
