// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_protection_rules.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "action": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "mod_security_rule_id": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "protection_rules": {
        "type": [
          "list",
          [
            "object",
            {
              "action": "string",
              "description": "string",
              "exclusions": [
                "list",
                [
                  "object",
                  {
                    "exclusions": [
                      "list",
                      "string"
                    ],
                    "target": "string"
                  }
                ]
              ],
              "key": "string",
              "labels": [
                "list",
                "string"
              ],
              "mod_security_rule_ids": [
                "list",
                "string"
              ],
              "name": "string",
              "waas_policy_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "waas_policy_id": {
        "type": "string",
        "required": true
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

export interface DataOciWaasProtectionRulesConfig extends TerraformMetaArguments {
  readonly action?: string[];
  readonly modSecurityRuleId?: string[];
  readonly waasPolicyId: string;
  /** filter block */
  readonly filter?: DataOciWaasProtectionRulesFilter[];
}
export class DataOciWaasProtectionRulesProtectionRulesExclusions extends ComplexComputedList {

  // exclusions - computed: true, optional: false, required: true
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }
}
export class DataOciWaasProtectionRulesProtectionRules extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusions - computed: true, optional: false, required: true
  public get exclusions() {
    return 'not implemented' as any;
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
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

  // waas_policy_id - computed: true, optional: false, required: true
  public get waasPolicyId() {
    return this.getStringAttribute('waas_policy_id');
  }
}
export interface DataOciWaasProtectionRulesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciWaasProtectionRules extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasProtectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_protection_rules',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._modSecurityRuleId = config.modSecurityRuleId;
    this._waasPolicyId = config.waasPolicyId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string[];
  public get action() {
    return this._action;
  }
  public set action(value: string[] | undefined) {
    this._action = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // mod_security_rule_id - computed: false, optional: true, required: false
  private _modSecurityRuleId?: string[];
  public get modSecurityRuleId() {
    return this._modSecurityRuleId;
  }
  public set modSecurityRuleId(value: string[] | undefined) {
    this._modSecurityRuleId = value;
  }

  // protection_rules - computed: true, optional: false, required: true
  public protectionRules(index: string) {
    return new DataOciWaasProtectionRulesProtectionRules(this, 'protection_rules', index);
  }

  // waas_policy_id - computed: false, optional: false, required: true
  private _waasPolicyId: string;
  public get waasPolicyId() {
    return this._waasPolicyId;
  }
  public set waasPolicyId(value: string) {
    this._waasPolicyId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciWaasProtectionRulesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciWaasProtectionRulesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      mod_security_rule_id: this._modSecurityRuleId,
      waas_policy_id: this._waasPolicyId,
      filter: this._filter,
    };
  }
}
