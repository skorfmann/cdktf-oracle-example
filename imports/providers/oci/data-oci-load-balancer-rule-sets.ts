// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_rule_sets.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
      },
      "rule_sets": {
        "type": [
          "list",
          [
            "object",
            {
              "id": "string",
              "items": [
                "list",
                [
                  "object",
                  {
                    "action": "string",
                    "allowed_methods": [
                      "list",
                      "string"
                    ],
                    "are_invalid_characters_allowed": "bool",
                    "conditions": [
                      "list",
                      [
                        "object",
                        {
                          "attribute_name": "string",
                          "attribute_value": "string",
                          "operator": "string"
                        }
                      ]
                    ],
                    "description": "string",
                    "header": "string",
                    "http_large_header_size_in_kb": "number",
                    "prefix": "string",
                    "redirect_uri": [
                      "list",
                      [
                        "object",
                        {
                          "host": "string",
                          "path": "string",
                          "port": "number",
                          "protocol": "string",
                          "query": "string"
                        }
                      ]
                    ],
                    "response_code": "number",
                    "status_code": "number",
                    "suffix": "string",
                    "value": "string"
                  }
                ]
              ],
              "load_balancer_id": "string",
              "name": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciLoadBalancerRuleSetsConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerRuleSetsFilter[];
}
export class DataOciLoadBalancerRuleSetsRuleSetsItemsConditions extends ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: true
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: true
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export class DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: true
  public get query() {
    return this.getStringAttribute('query');
  }
}
export class DataOciLoadBalancerRuleSetsRuleSetsItems extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // allowed_methods - computed: true, optional: false, required: true
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // are_invalid_characters_allowed - computed: true, optional: false, required: true
  public get areInvalidCharactersAllowed() {
    return this.getBooleanAttribute('are_invalid_characters_allowed');
  }

  // conditions - computed: true, optional: false, required: true
  public get conditions() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // header - computed: true, optional: false, required: true
  public get header() {
    return this.getStringAttribute('header');
  }

  // http_large_header_size_in_kb - computed: true, optional: false, required: true
  public get httpLargeHeaderSizeInKb() {
    return this.getNumberAttribute('http_large_header_size_in_kb');
  }

  // prefix - computed: true, optional: false, required: true
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // redirect_uri - computed: true, optional: false, required: true
  public get redirectUri() {
    return 'not implemented' as any;
  }

  // response_code - computed: true, optional: false, required: true
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }

  // status_code - computed: true, optional: false, required: true
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // suffix - computed: true, optional: false, required: true
  public get suffix() {
    return this.getStringAttribute('suffix');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciLoadBalancerRuleSetsRuleSets extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciLoadBalancerRuleSetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerRuleSets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerRuleSetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_rule_sets',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerId = config.loadBalancerId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId: string;
  public get loadBalancerId() {
    return this._loadBalancerId;
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }

  // rule_sets - computed: true, optional: false, required: true
  public ruleSets(index: string) {
    return new DataOciLoadBalancerRuleSetsRuleSets(this, 'rule_sets', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLoadBalancerRuleSetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerRuleSetsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      filter: this._filter,
    };
  }
}
