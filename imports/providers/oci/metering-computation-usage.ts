// https://www.terraform.io/docs/providers/oci/r/metering_computation_usage.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_depth": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "filter": {
        "type": "string",
        "optional": true
      },
      "granularity": {
        "type": "string",
        "required": true
      },
      "group_by": {
        "type": [
          "list",
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
      "items": {
        "type": [
          "list",
          [
            "object",
            {
              "ad": "string",
              "compartment_id": "string",
              "compartment_name": "string",
              "compartment_path": "string",
              "computed_amount": "number",
              "computed_quantity": "number",
              "currency": "string",
              "discount": "number",
              "list_rate": "number",
              "overage": "string",
              "overages_flag": "string",
              "platform": "string",
              "region": "string",
              "resource_id": "string",
              "resource_name": "string",
              "service": "string",
              "shape": "string",
              "sku_name": "string",
              "sku_part_number": "string",
              "subscription_id": "string",
              "tags": [
                "list",
                [
                  "object",
                  {
                    "key": "string",
                    "namespace": "string",
                    "value": "string"
                  }
                ]
              ],
              "time_usage_ended": "string",
              "time_usage_started": "string",
              "unit": "string",
              "unit_price": "number",
              "weight": "number"
            }
          ]
        ],
        "computed": true
      },
      "query_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tenant_id": {
        "type": "string",
        "required": true
      },
      "time_usage_ended": {
        "type": "string",
        "required": true
      },
      "time_usage_started": {
        "type": "string",
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface MeteringComputationUsageConfig extends TerraformMetaArguments {
  readonly compartmentDepth?: number;
  readonly filter?: string;
  readonly granularity: string;
  readonly groupBy?: string[];
  readonly queryType?: string;
  readonly tenantId: string;
  readonly timeUsageEnded: string;
  readonly timeUsageStarted: string;
  /** timeouts block */
  readonly timeouts?: MeteringComputationUsageTimeouts;
}
export class MeteringComputationUsageItemsTags extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class MeteringComputationUsageItems extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: true
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // compartment_path - computed: true, optional: false, required: true
  public get compartmentPath() {
    return this.getStringAttribute('compartment_path');
  }

  // computed_amount - computed: true, optional: false, required: true
  public get computedAmount() {
    return this.getNumberAttribute('computed_amount');
  }

  // computed_quantity - computed: true, optional: false, required: true
  public get computedQuantity() {
    return this.getNumberAttribute('computed_quantity');
  }

  // currency - computed: true, optional: false, required: true
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // discount - computed: true, optional: false, required: true
  public get discount() {
    return this.getNumberAttribute('discount');
  }

  // list_rate - computed: true, optional: false, required: true
  public get listRate() {
    return this.getNumberAttribute('list_rate');
  }

  // overage - computed: true, optional: false, required: true
  public get overage() {
    return this.getStringAttribute('overage');
  }

  // overages_flag - computed: true, optional: false, required: true
  public get overagesFlag() {
    return this.getStringAttribute('overages_flag');
  }

  // platform - computed: true, optional: false, required: true
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: true
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // service - computed: true, optional: false, required: true
  public get service() {
    return this.getStringAttribute('service');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // sku_name - computed: true, optional: false, required: true
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // sku_part_number - computed: true, optional: false, required: true
  public get skuPartNumber() {
    return this.getStringAttribute('sku_part_number');
  }

  // subscription_id - computed: true, optional: false, required: true
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tags - computed: true, optional: false, required: true
  public get tags() {
    return 'not implemented' as any;
  }

  // time_usage_ended - computed: true, optional: false, required: true
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }

  // time_usage_started - computed: true, optional: false, required: true
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }

  // unit - computed: true, optional: false, required: true
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // unit_price - computed: true, optional: false, required: true
  public get unitPrice() {
    return this.getNumberAttribute('unit_price');
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface MeteringComputationUsageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MeteringComputationUsage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MeteringComputationUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_usage',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentDepth = config.compartmentDepth;
    this._filter = config.filter;
    this._granularity = config.granularity;
    this._groupBy = config.groupBy;
    this._queryType = config.queryType;
    this._tenantId = config.tenantId;
    this._timeUsageEnded = config.timeUsageEnded;
    this._timeUsageStarted = config.timeUsageStarted;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_depth - computed: true, optional: true, required: false
  private _compartmentDepth?: number;
  public get compartmentDepth() {
    return this._compartmentDepth ?? this.getNumberAttribute('compartment_depth');
  }
  public set compartmentDepth(value: number | undefined) {
    this._compartmentDepth = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string | undefined) {
    this._filter = value;
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity: string;
  public get granularity() {
    return this._granularity;
  }
  public set granularity(value: string) {
    this._granularity = value;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[];
  public get groupBy() {
    return this._groupBy ?? this.getListAttribute('group_by');
  }
  public set groupBy(value: string[] | undefined) {
    this._groupBy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // items - computed: true, optional: false, required: true
  public items(index: string) {
    return new MeteringComputationUsageItems(this, 'items', index);
  }

  // query_type - computed: true, optional: true, required: false
  private _queryType?: string;
  public get queryType() {
    return this._queryType ?? this.getStringAttribute('query_type');
  }
  public set queryType(value: string | undefined) {
    this._queryType = value;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }

  // time_usage_ended - computed: false, optional: false, required: true
  private _timeUsageEnded: string;
  public get timeUsageEnded() {
    return this._timeUsageEnded;
  }
  public set timeUsageEnded(value: string) {
    this._timeUsageEnded = value;
  }

  // time_usage_started - computed: false, optional: false, required: true
  private _timeUsageStarted: string;
  public get timeUsageStarted() {
    return this._timeUsageStarted;
  }
  public set timeUsageStarted(value: string) {
    this._timeUsageStarted = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MeteringComputationUsageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MeteringComputationUsageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_depth: this._compartmentDepth,
      filter: this._filter,
      granularity: this._granularity,
      group_by: this._groupBy,
      query_type: this._queryType,
      tenant_id: this._tenantId,
      time_usage_ended: this._timeUsageEnded,
      time_usage_started: this._timeUsageStarted,
      timeouts: this._timeouts,
    };
  }
}
