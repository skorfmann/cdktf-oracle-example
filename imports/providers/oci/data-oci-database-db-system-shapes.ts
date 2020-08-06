// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_system_shapes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_system_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "available_core_count": "number",
              "available_data_storage_in_tbs": "number",
              "available_db_node_storage_in_gbs": "number",
              "available_memory_in_gbs": "number",
              "core_count_increment": "number",
              "maximum_node_count": "number",
              "min_core_count_per_node": "number",
              "min_data_storage_in_tbs": "number",
              "min_db_node_storage_per_node_in_gbs": "number",
              "min_memory_per_node_in_gbs": "number",
              "minimum_core_count": "number",
              "minimum_node_count": "number",
              "name": "string",
              "shape": "string",
              "shape_family": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface DataOciDatabaseDbSystemShapesConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbSystemShapesFilter[];
}
export class DataOciDatabaseDbSystemShapesDbSystemShapes extends ComplexComputedList {

  // available_core_count - computed: true, optional: false, required: true
  public get availableCoreCount() {
    return this.getNumberAttribute('available_core_count');
  }

  // available_data_storage_in_tbs - computed: true, optional: false, required: true
  public get availableDataStorageInTbs() {
    return this.getNumberAttribute('available_data_storage_in_tbs');
  }

  // available_db_node_storage_in_gbs - computed: true, optional: false, required: true
  public get availableDbNodeStorageInGbs() {
    return this.getNumberAttribute('available_db_node_storage_in_gbs');
  }

  // available_memory_in_gbs - computed: true, optional: false, required: true
  public get availableMemoryInGbs() {
    return this.getNumberAttribute('available_memory_in_gbs');
  }

  // core_count_increment - computed: true, optional: false, required: true
  public get coreCountIncrement() {
    return this.getNumberAttribute('core_count_increment');
  }

  // maximum_node_count - computed: true, optional: false, required: true
  public get maximumNodeCount() {
    return this.getNumberAttribute('maximum_node_count');
  }

  // min_core_count_per_node - computed: true, optional: false, required: true
  public get minCoreCountPerNode() {
    return this.getNumberAttribute('min_core_count_per_node');
  }

  // min_data_storage_in_tbs - computed: true, optional: false, required: true
  public get minDataStorageInTbs() {
    return this.getNumberAttribute('min_data_storage_in_tbs');
  }

  // min_db_node_storage_per_node_in_gbs - computed: true, optional: false, required: true
  public get minDbNodeStoragePerNodeInGbs() {
    return this.getNumberAttribute('min_db_node_storage_per_node_in_gbs');
  }

  // min_memory_per_node_in_gbs - computed: true, optional: false, required: true
  public get minMemoryPerNodeInGbs() {
    return this.getNumberAttribute('min_memory_per_node_in_gbs');
  }

  // minimum_core_count - computed: true, optional: false, required: true
  public get minimumCoreCount() {
    return this.getNumberAttribute('minimum_core_count');
  }

  // minimum_node_count - computed: true, optional: false, required: true
  public get minimumNodeCount() {
    return this.getNumberAttribute('minimum_node_count');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_family - computed: true, optional: false, required: true
  public get shapeFamily() {
    return this.getStringAttribute('shape_family');
  }
}
export interface DataOciDatabaseDbSystemShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbSystemShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbSystemShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_system_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // db_system_shapes - computed: true, optional: false, required: true
  public dbSystemShapes(index: string) {
    return new DataOciDatabaseDbSystemShapesDbSystemShapes(this, 'db_system_shapes', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDbSystemShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbSystemShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
